package berufsschule.landshut1.it.klasse10b;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class VierGewinnt

{
   
    /**
   
    * @param args
   
    */
   
    //Initialisierungen   
    static char spielfeld[][] = new char[6][7];   
    static BufferedReader input = new BufferedReader(new InputStreamReader(System.in));   
    static int spalte = 0;   
    static boolean gewonnen = false;   
    static boolean isSpieler1 = true;
   
    public static void init_spielfeld()
    {
        //Spielfeld mit Punkten fÃƒÂ¼llen
        for (int z = 0; z<6; z++)
        {
            for (int s = 0; s<7; s++)
            spielfeld[z][s] = '.';
        }
    }
   
    public static void ausgabe()
    {
        //Spielfeld ausgeben
        System.out.println("    1   2   3   4   5   6   7");
        for (int z = 0; z<6; z++)
        {
            System.out.print(z+1 + " |");
            for (int s = 0; s<7; s++)   
                System.out.print("_" + spielfeld[z][s] + "_|");
            System.out.println();
        }
    }
   
    public static void benutzereingabe() throws IOException
   
    {
        //Benutzereingabe, entsprechenden Punkt ersetzen
        if (isSpieler1)
        {
            System.out.println("Spieler 1, gib eine Spalte ein: ");
            try
            {
                spalte = Integer.parseInt(input.readLine())-1;
                if ((spalte > -1) && (spalte < 7))
                {
                    if (spielfeld[0][spalte] == '.')
                    {   
                        for (int z = 5; z >= 0; z--)               
                        {               
                            if (spielfeld[z][spalte] == '.')
                            {                   
                                spielfeld[z][spalte] = 'x';                   
                                break;               
                            }
                        }               
                        isSpieler1 = false;       
                    }           
                    else
                        System.out.println("Depp, da is scho voll");
                }
                else
                    System.out.println("Gib eine Zahl zwischen 1 und 7 ein!!!");
            }
            catch (NumberFormatException e)
            {
                System.out.println("Gib eine Zahl zwischen 1 und 7 ein");
            }
        }
        else
        {
            System.out.println("Spieler 2, gib eine Spalte ein: ");
            try
            {
                spalte = Integer.parseInt(input.readLine())-1;
                if ((spalte > -1) && (spalte < 7))
                {
                    if (spielfeld[0][spalte] == '.')           
                    {           
                        for (int z = 5; z >= 0; z--)               
                        {               
                            if (spielfeld[z][spalte] == '.')                   
                            {
                                spielfeld[z][spalte] = 'o';                       
                                break;                   
                            }
                        }
                        isSpieler1 = true;
                    }
                    else
                        System.out.println("Depp, da is scho voll");
                }
                else
                    System.out.println("Gib eine Zahl zwischen 1 und 7 ein!!!");
            }
            catch (NumberFormatException e)
            {
                System.out.println("Gib eine Zahl zwischen 1 und 7 ein");
            }
        }
    }
   
    public static void gewinnermittlung()
    {
        //Falls Spieler 1 waagrecht gewonnen hat
        for (int z=0; z<6; z++)
        {
            for (int s=0; s<4; s++)
            {
                if (spielfeld[z][s] == 'x' &&
                    spielfeld[z][s+1] == 'x' &&
                    spielfeld[z][s+2] == 'x' &&
                    spielfeld[z][s+3] == 'x')
                {
                    System.out.println("Spieler 1 hat gewonnen");
                    gewonnen = true;
                }
            }
        }
        //Falls Spieler 2 waagrecht gewonnen hat
        for (int z=0; z<6; z++)
        {
            for (int s=0; s<4; s++)
            {
                if (spielfeld[z][s] == 'o' &&
                    spielfeld[z][s+1] == 'o' &&
                    spielfeld[z][s+2] == 'o' &&
                    spielfeld[z][s+3] == 'o')
                {
                    System.out.println("Spieler 2 hat gewonnen");
                    gewonnen = true;
                }
            }
        }
        //Falls Spieler 1 senkrecht gewonnen hat
        for (int z=0; z<3; z++)
        {
            for (int s=0; s<7; s++)
            {
                if (spielfeld[z][s] == 'x' &&
                    spielfeld[z+1][s] == 'x' &&
                    spielfeld[z+2][s] == 'x' &&
                    spielfeld[z+3][s] == 'x')
                {
                    System.out.println("Spieler 1 hat gewonnen");
                    gewonnen = true;
                }
            }
        }
        //Falls Spieler 2 senkrecht gewonnen hat
        for (int z=0; z<3; z++)
        {
            for (int s=0; s<7; s++)
            {
                if (spielfeld[z][s] == 'o' &&
                    spielfeld[z+1][s] == 'o' &&
                    spielfeld[z+2][s] == 'o' &&
                    spielfeld[z+3][s] == 'o')
                {
                    System.out.println("Spieler 2 hat gewonnen");
                    gewonnen = true;
                }
            }
        }
        //Falls Spieler 1 diagonal nach rechts unten gewonnen hat
        for (int z=0; z<3; z++)
        {
            for (int s=0; s<4; s++)
            {
                if (spielfeld[z][s] == 'x' &&
                    spielfeld[z+1][s+1] == 'x' &&
                    spielfeld[z+2][s+2] == 'x' &&
                    spielfeld[z+3][s+3] == 'x')
                {
                    System.out.println("Spieler 1 hat gewonnen");
                    gewonnen = true;
                }
            }
        }
        //Falls Spieler 2 diagonal nach rechts unten gewonnen hat
        for (int z=0; z<3; z++)
        {
            for (int s=0; s<4; s++)
            {
                if (spielfeld[z][s] == 'o' &&
                    spielfeld[z+1][s+1] == 'o' &&
                    spielfeld[z+2][s+2] == 'o' &&
                    spielfeld[z+3][s+3] == 'o')
                {
                    System.out.println("Spieler 2 hat gewonnen");
                    gewonnen = true;
                }
            }
        }
        //Falls Spieler 1 diagonal nach rechts oben gewonnen hat
        for (int z=5; z>2; z--)
        {
            for (int s=0; s<4; s++)
            {
                if (spielfeld[z][s] == 'x' &&
                    spielfeld[z-1][s+1] == 'x' &&
                    spielfeld[z-2][s+2] == 'x' &&
                    spielfeld[z-3][s+3] == 'x')
                {
                    System.out.println("Spieler 1 hat gewonnen");
                    gewonnen = true;
                }
            }
        }
        //Falls Spieler 2 diagonal nach rechts oben gewonnen hat
        for (int z=5; z>2; z--)
        {
            for (int s=0; s<4; s++)
            {
                if (spielfeld[z][s] == 'o' &&
                    spielfeld[z-1][s+1] == 'o' &&
                    spielfeld[z-2][s+2] == 'o' &&
                    spielfeld[z-3][s+3] == 'o')
                {
                    System.out.println("Spieler 2 hat gewonnen");
                    gewonnen = true;
                }
            }
        }
    }
   
    public static void main(String[] args) throws IOException
    {
        init_spielfeld(); //Spielfeld anlegen
        ausgabe(); //leeres Spielfeld ausgeben
        do //solange noch keiner gewonnen hat
        {   
            benutzereingabe();       
            ausgabe();
            gewinnermittlung();
        }   
        while(!gewonnen);   
    }
   
}

