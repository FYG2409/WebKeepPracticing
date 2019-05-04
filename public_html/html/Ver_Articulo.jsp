<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ARTICULO</title>
    </head>
    <body>
        <%
            String Materia = request.getParameter("Mat"); 
            String Tema = request.getParameter("Tem");
            String Desc = request.getParameter("Des");
            String Ejemp = request.getParameter("Eje");
            out.println(Tema);
            out.println(Materia);
            out.println(Desc);
        
        %>
    </body>
</html>
