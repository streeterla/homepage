import java.util.*;
public class Bibliothek 
{

	/**
	 * @param args
	 */
	@SuppressWarnings("deprecation")
	public static void main(String[] args) 
	{
		OnlineBuch onlineBook = new OnlineBuch();
		onlineBook.setAnzahlAutoren(5);
		onlineBook.setAnzahlKapitel(10);
		onlineBook.setTitel("supertolles online Buch");
		onlineBook.setErscheinungsjahr(new Date());
		String autoren[] = {"Hans", "Dieter", "Sepp", "Heinzi", "Holger"};
		Kapitel kapitel[] = {new Kapitel(1, "Vorwort"), new Kapitel (2, "Einfuehrung"), new Kapitel(1, "Weiterleitung"), new Kapitel(100, "Hauptteil"), new Kapitel(1, "Weiterleitung"), new Kapitel(10, "Schluss"), new Kapitel(1, "Weiterleitung"), new Kapitel(4, "Fazit"), new Kapitel(1, "Weiterleitung"), new Kapitel(1, "Umschlagtext")};
		onlineBook.setAutoren(autoren);
		onlineBook.setKapitel(kapitel);
		System.out.println("Das Buch mit dem Titel '" + onlineBook.getTitel() + "' erschien am " + onlineBook.getErscheinungsjahr() + " und wurde von");
		for (String out : autoren)
		{
			System.out.println(out);
		}
		System.out.println("geschrieben. Es hat die Kapitel (mit Seitenzahl):");
		for (Kapitel out : kapitel)
		{
			System.out.println(out);
		}
	}

}
