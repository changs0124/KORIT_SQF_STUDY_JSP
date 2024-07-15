<%@page import="com.study.dvd.dao.ProducerDao"%>
<%@page import="com.study.dvd.entity.Producer"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String searchName = request.getParameter("searchName");
	List<Producer> pros = ProducerDao.searchProducerByName(searchName);
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
	table {
		width: 100%;
		overflow-x: auto; 
	}
	
	table, th, td {
		border: 1px solid #dbdbdb;
		border-collapse: collapse;
	}
	
	th, td {
		padding: 5px, 10px;
	}
</style>
</head>
<body>
	<div>
		<label>Producer 검색</label>
		<input type="text" class="search-input" placeholder="Produer 이름을 입력하세요.">
		<button onclick="handleSearchClick()">검색</button>
	</div>
	<table>
		<thead>
			<tr>
				<th>제작사ID</th>
				<th>제작사</th>
			</tr>
		</thead>
		<tbody>
			<%
				for(Producer pro : pros) {
			%>
				<tr>
					<td><%=pro.getProducerId() %></td>
					<td><%=pro.getProducerName() %></td>
				</tr>
			<%
				}
			%>
		</tbody>
	</table>
	
	
	<script src="/dvd/static/search_producer.js"></script>
</body>
</html>