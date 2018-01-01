package berufsschule.landshut1.it.klasse10b;
import java.io.*;
public class KinderG 
{
	public static void main(String[] args) throws IOException
	{
		//Deklarationen
		double einkommen;
		int anzahlKinder;
		double kindergeld;
		String ausgabe;
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
		
		//Zahlen einlesen
		System.out.println("Geben Sie das jähriche Einkommen ein: ");
		einkommen = Double.parseDouble(input.readLine());
		System.out.println("Wieviele Kinder haben Sie?");
		anzahlKinder = Integer.parseInt(input.readLine());
		
		//Berechnung
		if (anzahlKinder != 0)
		{
			if (einkommen < 45000)
			{
				switch (anzahlKinder)
				{
					case 1: kindergeld = 70; break;
					case 2: kindergeld = 70 + 130; break;
					case 3: kindergeld = 70 + 130 + 220; break;
					case 4: kindergeld = 70 + 130 + 220 + 240; break;
					default: kindergeld = 70 + 130 + 220 + 240 + (anzahlKinder-4) * 240;
				}
			}
			else
			{
				switch (anzahlKinder)
				{
					case 1: kindergeld = 70; break;
					case 2: kindergeld = 70 + 70; break;
					case 3: kindergeld = 70 + 70 + 140; break;
					case 4: kindergeld = 70 + 70 + 140 + 140; break;
					default: kindergeld = 70 + 70 + 140 + 140 + (anzahlKinder-4) * 140;
				}
			}
		}
		else
			kindergeld = 0;
		einkommen += kindergeld;
		
		//Ausgabe
		ausgabe = ("" + einkommen).replace(".", ",");
		System.out.println("Sie verdienen " + ausgabe + "0 Euro im Jahr");
	}
}
