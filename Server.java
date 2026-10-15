import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


public class Server {

    
    static final String PROFILE_JSON = """
        {
          "email": "hello@example.com",
          "roles": ["Java Programming", "JavaScript", "HTML Web Pages"],
          "about": "I'm a 2nd-year college student who enjoys turning small ideas into working programs and web pages. I'm learning something new with every project and looking for internships.",
          "skills": [["Java", 70], ["JavaScript", 65], ["HTML", 80]],
          "projects": [
            { "title": "Grade Calculator", "description": "Console program that computes averages and letter grades.", "tags": "Java, OOP" },
            { "title": "Study Buddy", "description": "Timer and to-do list that helps plan study sessions.", "tags": "JavaScript, HTML" },
            { "title": "Club Website", "description": "Multi-page site for our school's coding club.", "tags": "HTML, Team of 3" },
            { "title": "Quiz Game", "description": "Multiple-choice quiz that keeps score as you play.", "tags": "JavaScript, DOM" }
          ]
        }
        """;  

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);

        server.createContext("/api/profile", exchange ->
            send(exchange, 200, "application/json; charset=utf-8", PROFILE_JSON));

        server.createContext("/", exchange -> {
            String path = exchange.getRequestURI().getPath();
            if (path.equals("/") || path.equals("/front.html")) {
                sendFile(exchange, Paths.get("front.html"), "text/html; charset=utf-8");
            } else if (path.equals("/style  .js")) {
                sendFile(exchange, Paths.get("style.js"), "text/javascript; charset=utf-8");
            } else {
                send(exchange, 404, "text/plain; charset=utf-8", "Not found");
            }
        });

        server.start();
        System.out.println("Portfolio running at http://localhost:8000  (Ctrl+C to stop)");
    }

    static void sendFile(HttpExchange exchange, Path file, String type) throws IOException {
        if (!Files.exists(file)) {
            send(exchange, 404, "text/plain; charset=utf-8", "Missing file: " + file);
            return;
        }
        send(exchange, 200, type, new String(Files.readAllBytes(file), StandardCharsets.UTF_8));
    }

    static void send(HttpExchange exchange, int status, String type, String body) throws IOException {
        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", type);
        exchange.sendResponseHeaders(status, bytes.length);
        try (OutputStream out = exchange.getResponseBody()) {
            out.write(bytes);
        }
    }
}