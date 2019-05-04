<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ARTICULO</title>
    </head>
    <body>
        <%
            String Materia = request.getParameter("Mate"); 
            String Tema = request.getParameter("Tema");
            String Desc = request.getParameter("Desc");
            String Ejemp = request.getParameter("Ejem");
            out.println(Tema);
            out.println(Materia);
            out.println(Desc);
        %>
    </body>
</html>
