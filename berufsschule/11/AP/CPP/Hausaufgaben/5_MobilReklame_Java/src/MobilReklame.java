
public class MobilReklame
{

	public static void main(String[] args) 
	{
		Fahrzeugkunde fzgk = new Fahrzeugkunde("Fritz", "Meier", 123456, 401);
		Werbekunde wrbk = new Werbekunde("Hans", "Huber", 654321, "Katalog");
		int anzahlKunden = fzgk.getAnzahlKunden()+wrbk.getAnzahlKunden();
		Kunde kundenArray[] = {fzgk, wrbk};
		Datenfeld speicher = new Datenfeld(anzahlKunden, kundenArray);
		System.out.println("Kundennummer\t|\tNachname \t |\tVorname");
		for (Kunde kunde: speicher.getKundenArray())
		{
			System.out.println(kunde.getKundennummer() + "\t \t| \t" + kunde.getName() + "\t \t | \t" + kunde.getVorname());
		}
	}

}
