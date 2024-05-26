<!-- views/index.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codeial Forms</title>
    <link rel="stylesheet" href="/styles/style.css">
</head>
<body>
    <h1>Codeial Forms</h1>

    <!-- Batch Form -->
    <section>
        <h2>Batch Details</h2>
        <form action="/batch" method="POST">
            <input type="text" name="batch" placeholder="Batch Name" required>
            <button type="submit">Submit Batch</button>
        </form>
    </section>

    <!-- Student Details Form -->
    <section>
        <h2>Student Details</h2>
        <form action="/student-details" method="POST">
            <input type="text" name="name" placeholder="Name" required>
            <input type="text" name="college" placeholder="College" required>
            <select name="status">
                <option value="placed">Placed</option>
                <option value="not_placed">Not Placed</option>
            </select>
            <button type="submit">Submit Student Details</button>
        </form>
    </section>

    <!-- Course Scores Form -->
    <section>
        <h2>Course Scores</h2>
        <form action="/course-scores" method="POST">
            <input type="number" name="dsaScore" placeholder="DSA Final Score" required>
            <input type="number" name="webdScore" placeholder="WebD Final Score" required>
            <input type="number" name="reactScore" placeholder="React Final Score" required>
            <button type="submit">Submit Course Scores</button>
        </form>
    </section>

    <!-- Interviews Form -->
    <section>
        <h2>Interviews</h2>
        <form action="/interviews" method="POST">
            <input type="text" name="companyName" placeholder="Company Name" required>
            <input type="date" name="interviewDate" required>
            <button type="submit">Submit Interview</button>
        </form>
    </section>

    <!-- Results Form -->
    <section>
        <h2>Results</h2>
        <form action="/results" method="POST">
            <input type="text" name="company" placeholder="Company" required>
            <input type="text" name="student" placeholder="Student" required>
            <select name="result">
                <option value="PASS">PASS</option>
                <option value="FAIL">FAIL</option>
                <option value="On Hold">On Hold</option>
                <option value="Didn’t Attempt">Didn’t Attempt</option>
            </select>
            <button type="submit">Submit Result</button>
        </form>
    </section>
</body>
</html>
