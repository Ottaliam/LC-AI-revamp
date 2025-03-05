document.addEventListener("DOMContentLoaded", function() {
    const targetElement = document.querySelector('.managed-content-navigation');

    if (targetElement) {
        targetElement.innerHTML = `
            <div class="articles-menu page-menu">
                <nav>
                    <ul>
                        <li class="nav-item" data-page="index.html">
                            <a href="index.html">LC Labs Artificial Intelligence Planning Framework</a>
                            <ul class="submenu">
                                <li class="nav-item" data-page="about.html"><a href="about.html">About</a></li>
                                <li class="nav-item" data-page="understand.html"><a href="understand.html">Understand</a></li>
                                <li class="nav-item" data-page="experiment.html"><a href="experiment.html">Experiment</a></li>
                                <li class="nav-item" data-page="implement.html"><a href="implement.html">Implement</a></li>
                                <li class="nav-item" data-page="form.html"><a href="form.html">Worksheets</a></li>
                                <li class="nav-item" data-page="glossory.html"><a href="glossory.html">Glossory</a></li>
                            </ul>
                        </li>
                        <li class="nav-item" data-page="404.html"><a href="404.html">Worldwide Engagement</a></li>
                        <li class="nav-item" data-page="404.html"><a href="404.html">Active Artificial Intelligence Use Cases</a></li>
                        <li class="nav-item" data-page="404.html"><a href="404.html">Experiments to Date</a></li>
                        <li class="nav-item" data-page="404.html"><a href="404.html">Reports and Presentations</a></li>
                        <li class="nav-item" data-page="404.html"><a href="404.html">Artificial Intelligence Governance</a></li>
                        <li class="nav-item" data-page="phase_two_risk_accessment.html"><a href="phase_two_risk_accessment.html">Further Risk Assessment</a></li>
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

        // Highlight active menu item based on URL
        const currentPage = window.location.pathname.split("/").pop(); // Get the current page file name
        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach(item => {
            if (item.getAttribute("data-page") === currentPage) {
                item.classList.add("selected");
            }
        });
    }
});
