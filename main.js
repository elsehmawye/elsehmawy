

/* Visit our site at http://www.elahmad.com/ for more code
    This notice must stay intact for use */





    var onHours = " ";

    var onMinutes = " ";


    var onSeconds = " ";



    var offHours = 0;

    var offMinutes = 0;

    var offSeconds = 0;



    var logSeconds = 0;

    var logMinutes = 0;

    var logHours = 0;



    var OnTimeValue = " ";

    var OffTimeValue = " ";

    var PageTimeValue = " ";



    // Back to previous page.

    function WinOpen()

    {

        getLogoffTime();

    window.location="js-timet.htm"

    window.location="js-timet.htm"   // double call for Mac users??

    }



    // Loads HTML page to full window for View Source.

    function WinOpen1()

    {

        alert('View/Document Source from menu bar..., then close new window to return to this page. The animation of the radio buttons on the JavaScript index will be dead upon return. Reload the JavaScript page to get them going again. ');

    window.open("js-timer.htm","DisplayWindow","menubar=yes,scrollbars=yes");

    }



    // Captures logon time.

    function getLogonTime()

    {

    var now = new Date();

    // Used to display logon time.

    var ampm = (now.getHours() >= 12) ? " مساءً" : " صباحاً"

    var Hours = now.getHours();

          Hours = ((Hours > 12) ? Hours - 12 : Hours);

    var Minutes = ((now.getMinutes() < 10) ? ":0" : ":") + now.getMinutes();


    var Seconds = ((now.getSeconds() < 10) ? ":0" : ":") + now.getSeconds();

    // String to display log-on time.


    OnTimeValue =(" "


    + Hours


    + Minutes


    + Seconds


    + " "

    + ampm);



    // Capture logon time for use in timer().

    onHours = now.getHours();

    onMinutes = now.getMinutes();

    onSeconds = now.getSeconds();  

    }



    function getLogoffTime()

    {

    var now = new Date();

    // Used to display logoff time.

    var ampm = (now.getHours() >= 12) ? " مساءً" : " صباحاً"

    var Hours = now.getHours();

          Hours = ((Hours > 12) ? Hours - 12 : Hours);


    var Minutes = ((now.getMinutes() < 10) ? ":0" : ":") + now.getMinutes();


    var Seconds = ((now.getSeconds() < 10) ? ":0" : ":") + now.getSeconds();

    // String to display log-off time.


    OffTimeValue =(" "


    + Hours


    + Minutes


    + Seconds


    + " "

    + ampm);



    // Capture logoff time for use in timer().

    offHours = now.getHours();

    offMinutes = now.getMinutes();

    offSeconds = now.getSeconds();



    timer(); 

    }



    // Compute difference between logoff time and logon time. 

    function timer()

    { 

    if (offSeconds >= onSeconds)

    {logSeconds = offSeconds - onSeconds; }

    else

    {

        offMinutes -= 1;

    logSeconds = (offSeconds + 60) - onSeconds;      

       }

    if (offMinutes >= onMinutes)

    {logMinutes = offMinutes - onMinutes; }

    else

    {

        offHours -= 1;

    logMinutes = (offMinutes + 60) - onMinutes;

       }

    logHours = offHours - onHours;



    // Used to display time on page.

    logHours =  ((logHours < 10) ? "0" : ":") + logHours;

    logMinutes = ((logMinutes < 10) ? ":0" : ":") + logMinutes;


    logSeconds = ((logSeconds < 10) ? ":0" : ":") +logSeconds;

    // String to display time on page.

    PageTimeValue =(" "


    + logHours


    + logMinutes


    + logSeconds);



    displayTimes();

    }



    function displayTimes()

    {

        alert("\n,وقت دخول الصفحة    : " + OnTimeValue + "\n\nالوقت الآن  : " + OffTimeValue + "\n\nالوقت الذي قضيته بالصفحة هو : " + PageTimeValue);

    }



// Deactivate Cloaking -->

