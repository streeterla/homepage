/**
 * 
 */
package berufsschule.landshut1.it.klasse10b;
import java.io.*;

/**
 * @author streeter
 *
 */
public class LimitZaehlen 
{

	/**
	 * @param args
	 */
	public static void main(String[] args) throws IOException
	{
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Geben Sie das obere Limit ein:");
		
		try
		{
			int limit = Integer.parseInt(input.readLine());
			int erg = 0;
			
			while (limit > 0)
			{
				erg += limit;
				limit--;
			}
			System.out.println("Das Ergebnis der Summe 1+2+3+...+n lautet: " + erg);
		}
		catch (NumberFormatException e)
		{
			System.out.println("Sie müssen schon eine ZAHL eingeben!!!");
		}
	}

}
