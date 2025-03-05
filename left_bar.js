document.addEventListener("DOMContentLoaded", function() {
    // Select the element where navigation should be inserted
    const targetElement = document.querySelector('.managed-content-navigation');

    if (targetElement) {
        targetElement.innerHTML = `
            <div class="articles-menu page-menu">
                <nav>
                    <ul>
                        <li class="selected">
                            <a href="index.html">LC Labs Artificial Intelligence Planning Framework</a>
                            <ul class="submenu">
                                <li><a href="404.html">About</a></li>
                                <li><a href="404.html">Understand</a></li>
                                <li><a href="404.html">Experiment</a></li>
                                <li><a href="404.html">Implement</a></li>
                                <li><a href="form.html">Worksheets</a></li>
                                <li><a href="glossory.html">Glossory</a></li>
                            </ul>
                        </li>
                        <li><a href="404.html">Worldwide Engagement</a></li>
                        <li><a href="404.html">Active Artificial Intelligence Use Cases</a></li>
                        <li><a href="404.html">Experiments to Date</a></li>
                        <li><a href="404.html">Reports and Presentations</a></li>
                        <li><a href="404.html">Artificial Intelligence Governance</a></li>
                        <li><a href="phase_two_risk_accessment.html">Further Risk Assessment</a></li>
                    </ul>
                </nav>
            </div>
        `;

        // Dynamically insert CSS if not already present
        if (!document.querySelector('link[href="css/base.css"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "css/base.css";
            document.head.appendChild(link);
        }
    }
});
