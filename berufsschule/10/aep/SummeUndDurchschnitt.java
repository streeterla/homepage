package berufsschule.landshut1.it.klasse10b;

import java.io.*;

public class SummeUndDurchschnitt
{

        /**
         * Lassen Sie eine beliebige Anzahl von Zahlen addieren,
         * bis die Zahl 0 eingegeben wird.
         * Danach wird die Gesamtsumme und der Durchschnitt ausgegeben
         */
        public static void main(String[] args) throws IOException
        {
                BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
                double summe = 0;
                double schnitt;
                int counter = 0;

                System.out.println("Zahl (Ende mit 0): ");
                try
                {
                        double zahl = Double.parseDouble(input.readLine());
                        while (zahl!= 0)
                        {
                                summe += zahl;
                                counter++;

                                System.out.println("Zahl (Ende mit 0): ");
                                zahl = Double.parseDouble(input.readLine());
                        }
                        if (counter != 0)
                                schnitt = summe/counter;
                        else
                                schnitt = 0;

                        System.out.println("Summe: " + summe);
                        System.out.println("Durchschnitt: " + schnitt);
                }
                catch (Exception e)
                {
                        System.out.println("Sie haben keine ganze Zahl eingegeben!");
                }
        }
}

