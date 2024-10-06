<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
            line-height: 1.6;
        }
        h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
            border-bottom: 2px solid #eaeaea;
            padding-bottom: 10px;
        }
        p {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #aaa;
        }
        .info {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 10px;
        }
        strong {
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Contact Message</h1>

        <div class="info">
            <p><strong>Name:</strong> {{ $data['name'] }}</p>
            <p><strong>Email:</strong> {{ $data['email'] }}</p>
            <p><strong>Message:</strong> {{ $data['message'] }}</p>
        </div>

        <p>If this message was sent by mistake, please ignore it.</p>

        <div class="footer">
            <p>Minindal | {{ date('Y') }}</p>
        </div>
    </div>
</body>
</html>
