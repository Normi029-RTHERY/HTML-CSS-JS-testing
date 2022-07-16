// --bg-global-l: hsl(0, 0%, 90%);
// --bg-button-l: hsl(185, 80%, 80%);
// --circle-button-l: hsl(200, 80%, 40%);
// --bg-global-d: hsl(0, 0%, 20%);
// --bg-button-d: hsl(185, 80%, 10%);
// --circle - button - d: hsl(200, 80 %, 60 %);

var darkMode = false;

function changeTheme() {
    console.log('hey!');
    if (!darkMode) {
        document.documentElement.style.setProperty('--bg-global', 'hsl(0, 0%, 20%)');
        document.documentElement.style.setProperty('--bg-button', 'hsl(185, 80%, 80%)');
        document.documentElement.style.setProperty('--bg-circle', 'hsl(200, 80%, 40%)');
        darkMode = true;
    } else {
        document.documentElement.style.setProperty('--bg-global', 'hsl(0, 0%, 90%)');
        document.documentElement.style.setProperty('--bg-button', 'hsl(185, 80%, 60%)');
        document.documentElement.style.setProperty('--bg-circle', 'hsl(200, 80%, 20%)');
        darkMode = false;
    }
}

