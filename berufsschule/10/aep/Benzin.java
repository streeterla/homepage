/*
 * Created on 09.01.2009
 *
 */
package berufsschule.landshut1.it.klasse10b;

/**
 * @author Martin
 *
 */
import java.io.*;

public class Benzin 
{
	public static void main(String[] args) throws IOException
	{
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
		double km;
		double verbrauch;
		double schnitt;
		String ausgabe;

		System.out.println("Gefahrene Kilometer: ");
		km = Double.parseDouble(input.readLine());
		System.out.println("Verbrauchte Menge Sprit: ");
		verbrauch = Double.parseDouble(input.readLine());
		schnitt = verbrauch / km / 100;
		ausgabe = "" + schnitt + "";
		ausgabe = ausgabe.substring(0, ausgabe.indexOf(".")+3);
		System.out.println("Ihr Auto verbraucht " +  ausgabe + " Liter auf 100km");		
	}
}
