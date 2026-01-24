<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pengu's Codex</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            background-color: #1a1a1a;
            color: #00ff41;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            border: 2px solid #00ff41;
            padding: 20px;
            background-color: #000;
        }
        h1 {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .subtitle {
            text-align: center;
            font-size: 1.2em;
            margin-bottom: 30px;
        }
        .section {
            margin-bottom: 30px;
        }
        .penguin-art {
            text-align: center;
            font-family: monospace;
            white-space: pre;
            margin: 20px 0;
        }
        .languages {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        .language-item {
            border: 1px solid #00ff41;
            padding: 10px;
            text-align: center;
        }
        .stats {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 20px 0;
        }
        .stat-box {
            border: 1px solid #00ff41;
            padding: 10px;
            margin: 5px;
            min-width: 150px;
        }
        .connect {
            text-align: center;
            margin-top: 30px;
        }
        a {
            color: #00ff41;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #00ff41;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>PENGU</h1>
        <div class="subtitle">I am a German student who codes for fun</div>
        
        <div class="section">
            <h2>ABOUT</h2>
            <p>I'm Pengu — a hobby coder from Germany.</p>
            <p>I mostly code in Python and web tech, but sometimes wander into other languages.</p>
        </div>
        
        <div class="penguin-art">
{ P E N G U }
┌────────────┐
│ _~_       │
│ (o,o)     │
│ //) )     │
│ "" ""     │
└────────────┘
        </div>
        
        <div class="section">
            <h2>LANGUAGES & TOOLS</h2>
            <div class="languages">
                <div class="language-item">
                    <strong>Python</strong><br>
                    print("🐧")
                </div>
                <div class="language-item">
                    <strong>HTML5</strong><br>
                    &lt;div class="pixel"&gt;
                </div>
                <div class="language-item">
                    <strong>CSS3</strong><br>
                    image-rendering: pixelated;
                </div>
                <div class="language-item">
                    <strong>JavaScript</strong><br>
                    const snow = [];
                </div>
                <div class="language-item">
                    <strong>PHP</strong><br>
                    &lt;?php echo "❄"; ?&gt;
                </div>
                <div class="language-item">
                    <strong>Kotlin</strong><br>
                    fun pengu() {}
                </div>
                <div class="language-item">
                    <strong>C#</strong><br>
                    Console.Write("⛄");
                </div>
                <div class="language-item">
                    <strong>Godot</strong><br>
                    extends Node2D
                </div>
            </div>
        </div>
        
        <div class="section">
            <h2>GITHUB STATS</h2>
            <div class="stats">
                <div class="stat-box">
                    <strong>PIXEL STATS</strong><br>
                    [ 0x01 ] Total commits, repos and XP rendered into pixel bars.
                </div>
                <div class="stat-box">
                    <strong>PIXEL STREAK</strong><br>
                    [ 0x02 ] Consecutive coding streak, like combo hits in an arcade game.
                </div>
            </div>
        </div>
        
        <div class="connect">
            <h2>CONNECT</h2>
            <p><a href="#">GitHub</a> | <a href="#">Email</a></p>
        </div>
        
        <div class="footer">
            Thanks for stopping by — go check out my projects<br>
            © Pengu • Crafted in pixels
        </div>
    </div>
</body>
</html>