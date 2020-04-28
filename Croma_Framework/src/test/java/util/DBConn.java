package util;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class DBConn{

	public static Connection con;
	public static Statement stmt;
	public static ResultSet rs;
	public static String dbName = "EndlessAisle_APITestDb";
	public static String connURL = "jdbc:postgresql://localhost:5432/"+dbName;
	public static String connUser = "postgres";
	public static String connPwd = "ad@1234";

	// INPUT = queryName
	public static ArrayList<HashMap<String, String>> DBConn(String query) {

		ArrayList<HashMap<String, String>> arrayListOfHashMap = new ArrayList<>();

		System.out.println("query : " + query);

		int numberOfColumns = 0;
		try {

			System.out.println("Database connection started...");
			Class.forName("org.postgresql.Driver");
			con = DriverManager.getConnection(connURL, connUser, connPwd);
			con.setAutoCommit(false);
			System.out.println("Opened database successfully");
			stmt = con.createStatement();
			rs = stmt.executeQuery(query);
			ResultSetMetaData metadata = rs.getMetaData();
			numberOfColumns = metadata.getColumnCount();
			while (rs.next()) {
				HashMap<String, String> selectedValues = new HashMap();

				for (int j = 1; j <= numberOfColumns; j++) {

					selectedValues.put(metadata.getColumnName(j), rs.getString(j));
				}
				arrayListOfHashMap.add(selectedValues);
			}
			rs.close();
			stmt.close();
			con.close();
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
			e.printStackTrace();
			System.exit(0);
		}finally {
			System.out.println("Operation done successfully");
			return arrayListOfHashMap;
		}
	}

	//     ************************* Insert Data **************************

	// INPUT = queryName
	public static void insertStep(String queryName,String table,String step)
	{
		try {


			System.out.println("Database connection started...");
			Class.forName("org.postgresql.Driver");
			System.out.println("query : " + queryName);
			System.out.println("Step : " + step);
			System.out.println("Table : " + table);
			con = DriverManager.getConnection(connURL, connUser, connPwd);
			PreparedStatement smt = con.prepareStatement(queryName);
			smt.setString(1,step);
			smt.setString(2,table);
			smt.executeUpdate();
			con.setAutoCommit(true);
			System.out.println(" Data Inserted");
			smt.close();
			con.close();
		}catch (Exception ex)
		{
			ex.printStackTrace();
			System.err.println(ex.getClass().getName() + ": " + ex.getMessage());
			System.exit(0);
		}
	}

}