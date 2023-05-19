<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SignalRTest.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <div id="hitCount" style="font-size: 200px;"></div>
    </div>
    </form>
    <script src="scripts/jquery-1.6.4.min.js"></script>
    <script src="scripts/jquery.signalR-2.2.2.min.js"></script>

    <script>
        $(function () {
            var con = $.hubConnection();
            var hub = con.createHubProxy('hitCounter');
            hub.on('onHitRecorded', function (i) {
                $('#hitCount').text(i);
            });
            con.start(function () {
                hub.invoke('RecordHit');
            });
        });
    </script>
</body>
</html>
