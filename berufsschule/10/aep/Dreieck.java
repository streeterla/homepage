package berufsschule.landshut1.it.klasse10b;

import java.io.*;

public class Dreieck 
{
	public static void main(String[] args) throws IOException
	{
		System.out.println("Zahl eingeben:");
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
/*
 
  *
  **
  ***
  ****
  *****
 
 */
		try
		{
			int limit = Integer.parseInt(input.readLine());
			for(int j=0; j<limit; j++)
			{
				for(int i=0; i<=j; i++)
				{
					System.out.print("*");
				}
				System.out.println();
			}
		}
		catch(Exception e)
		{
			System.out.println("Sie haben keine ganze Zahl eingegeben");
		}
	}

}
