package berufsschule.landshut1.it.klasse10b;
import java.io.*;
import java.util.*;
public class Bubblesort
{
	public static void main(String[] args) throws IOException
	{
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));

		System.out.println("Wieviele Elemente? ");

		try
		{
			int limit = Integer.parseInt(input.readLine());
			int[] zufallszahlen = new int[limit];
			int eingabe = 0;
			boolean issorted;
			Random rnd = new Random();

			//Array mit Zufallszahlen fuellen
			for (int i = 0; i<limit; i++)
			{
				zufallszahlen[i] = rnd.nextInt(limit);
			}
			System.out.println("Feld mit Zufallszahlen gefuellt...");

			//Auswahlmenue so oft ausgeben, bis "3" eingegeben wird
			do
			{
				System.out.println("Auswahlmenue:");
				System.out.println("1 -> Zahlenfeld ausgeben");
				System.out.println("2 -> Zahlenfeld sortieren");
				System.out.println("3 -> Zahlenfeld beschleunigt sortieren");
				System.out.println("4 -> Zahlenfeld optimiert sortieren");
				System.out.println("5 -> Programm beenden");
				eingabe = Integer.parseInt(input.readLine());
				switch (eingabe)
				{
					case 1:
					{
						int j = 0;
						//nach 10 Zeichen eine neue Zeile beginnen
						for (int i = 0; i<limit; i++)
						{
							System.out.print(zufallszahlen[i] + "\t");
							if (j<9)
								j++;
							else
							{
								System.out.println();
								j=0;
							}
						}
						System.out.println();
						System.out.println();
						break;
					}
					//Bubblesort anwenden
					case 2:
					{
						int tmp = 0;
						int k = 0;
						for (int i = 0; i < zufallszahlen.length-1; i++)
						{
							for (int j = 0; j < zufallszahlen.length-1; j++)
							{
								if (zufallszahlen[j] > zufallszahlen[j+1])
								{
									tmp = zufallszahlen[j+1];
									zufallszahlen[j+1] = zufallszahlen[j];
									zufallszahlen[j] = tmp;
									k++;
									if (k>20)
									{
										System.out.println();
										k = 0;
									}
									else
										System.out.print(".");
								}
							}
						}
						break;
					}
					case 3:
					{
						int tmp = 0;
						int k = 0;
						for (int i = 0; i < zufallszahlen.length-1; i++)
						{
							for (int j = 0; j < zufallszahlen.length-i-1; j++)
							{
								if (zufallszahlen[j] > zufallszahlen[j+1])
								{
									tmp = zufallszahlen[j+1];
									zufallszahlen[j+1] = zufallszahlen[j];
									zufallszahlen[j] = tmp;
									k++;
									if (k>20)
									{
										System.out.println();
										k = 0;
									}
									else
										System.out.print(".");
								}
							}
						}
						break;
					}
					case 4:
					{
						int tmp = 0;
						int k = 0;
						for (int i = 0; i < zufallszahlen.length-1; i++)
						{
							for (int j = 0; j < zufallszahlen.length-i-1; j++)
							{
								if (zufallszahlen[j] > zufallszahlen[j+1])
									issorted = false;
								else
									issorted = true;
								if(!issorted)
								{
									tmp = zufallszahlen[j+1];
									zufallszahlen[j+1] = zufallszahlen[j];
									zufallszahlen[j] = tmp;
									k++;
									if (k>20)
									{
										System.out.println();
										k = 0;
									}
									else
										System.out.print(".");
								}
							}
						}
						System.out.println();
						break;
					}
					//Programm beenden
					default:
					{
						System.exit(0);
					}
				}
			}
			while(eingabe!= 5);
		}
		//falls keine ganze Zahl eingegeben wurde
		catch (Exception e)
		{
			System.out.println("Sie haben keine ganze Zahl eingegeben");
		}
	}
}