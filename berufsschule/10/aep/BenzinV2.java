/*
 * Created on 08.02.2009
 *
 */
package berufsschule.landshut1.it.klasse10b;

/**
 * @author Martin
 *
 */
import java.io.*;

public class BenzinV2
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
		if (km != 0)
		{
			System.out.println("Verbrauchte Menge Sprit: ");
			verbrauch = Double.parseDouble(input.readLine());
			schnitt = verbrauch / km / 100;
			ausgabe = "" + schnitt + "";
			ausgabe = ausgabe.substring(0, ausgabe.indexOf(".")+3);
			System.out.println("Ihr Auto verbraucht " +  ausgabe + " Liter auf 100km");		
		}
		else
			System.out.println("Wenn Sie noch gar nicht gefahren sind, wird" +
								" die Berechnung des Verbrauchs schwer... ");
	}
}
