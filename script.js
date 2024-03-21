document.addEventListener('DOMContentLoaded', function() {
    loadWidget('widget1', 'widgets/widget1.html');
    loadWidget('widget2', 'widgets/widget2.html');
    loadWidget('widget3', 'widgets/widget3.html');
    loadWidget('widget4', 'widgets/widget4.html');
    loadWidget('widget5', 'widgets/widget5.html');
    loadWidget('widget6', 'widgets/widget6.html');
});

function loadWidget(widgetId, widgetUrl) {
    fetch(widgetUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById(widgetId).innerHTML = data;
        })
        .catch(err => console.error('Fehler beim Laden des Widgets:', err));
}
