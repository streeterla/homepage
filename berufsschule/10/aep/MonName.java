package berufsschule.landshut1.it.klasse10b;

import java.io.*;

public class MonName 
{
	public static void main(String[] args) throws IOException
	{
		int monatszahl;
		String monat="";
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
		
		System.out.println("Geben Sie die Monatszahl ein: ");
		
		try
		{
			monatszahl = Integer.parseInt(input.readLine());
			
			if (monatszahl >= 1 && monatszahl <= 12)
			{
				switch(monatszahl)
				{
					case 1: monat = "Januar"; break;
					case 2: monat = "Februar"; break;
					case 3: monat = "März"; break;
					case 4: monat = "April"; break;
					case 5: monat = "Mai"; break;
					case 6: monat = "Juni"; break;
					case 7: monat = "Juli"; break;
					case 8: monat = "August"; break;
					case 9: monat = "September"; break;
					case 10: monat =  "Oktober"; break;
					case 11: monat = "November"; break;
					default: monat = "Dezember"; break;
				}
				System.out.println("Nummer des Monats: " + monatszahl);
				System.out.println("Der " + monatszahl + ". Monat heißt " + monat);
			}
			else
				System.out.println("Mehr als 12 Monate gibt es aber ned!");
		}
		catch (Exception e)
		{
			System.out.println("Sie haben keine ganze Zahl eingegeben");
		}
		
		

	}

}
