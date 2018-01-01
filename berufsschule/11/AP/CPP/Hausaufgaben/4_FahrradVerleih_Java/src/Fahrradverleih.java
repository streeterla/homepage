
public class Fahrradverleih 
{
	public static void main(String[] args)
	{
		Kunde einsKunde = new Kunde (123456, "Martin", 1);
		Kunde zweiKunde = new Kunde (654321, "Kerstin", 2);
		Kunde dreiKunde = new Kunde (456123, "Simone", 3);
		
		Fahrrad radEins = new Mountainbike("bulls", 20);
		Fahrrad radZwei = new Mountainbike("cats", 30);
		Fahrrad radDrei = new Mountainbike("cobra", 40);
		Fahrrad radVier = new Trekkingrad("kettler", true);
		Fahrrad radFuenf = new Trekkingrad("pegasius", false);
		Fahrrad radSechs = new Trekkingrad("red bull", true);
		
		Mietvertrag vertragEins = new Mietvertrag(123, radEins.getBezeichnung(), einsKunde.getKundennummer());
		Mietvertrag vertragZwei = new Mietvertrag(321, radZwei.getBezeichnung(), zweiKunde.getKundennummer());
		Mietvertrag vertragDrei = new Mietvertrag(132, radDrei.getBezeichnung(),  zweiKunde.getKundennummer());
		Mietvertrag vertragVier = new Mietvertrag(213, radVier.getBezeichnung(), dreiKunde.getKundennummer());
		Mietvertrag vertragFuenf = new Mietvertrag(231, radFuenf.getBezeichnung(), dreiKunde.getKundennummer());
		Mietvertrag vertragSechs = new Mietvertrag(312, radSechs.getBezeichnung(), dreiKunde.getKundennummer());
		
		einsKunde.arrayAusgeliehenerRaeder[0] = vertragEins;
		zweiKunde.arrayAusgeliehenerRaeder[0] = vertragZwei;
		zweiKunde.arrayAusgeliehenerRaeder[1] = vertragDrei;
		dreiKunde.arrayAusgeliehenerRaeder[0] = vertragVier;
		dreiKunde.arrayAusgeliehenerRaeder[1] = vertragFuenf;
		dreiKunde.arrayAusgeliehenerRaeder[2] = vertragSechs;
		
		
		System.out.println("Kunde " + einsKunde.getName() + " mit der Kundennummer " + vertragEins.getKundennummer() + " hat folgende Raeder ausgeliehen:");
		for (Mietvertrag out: einsKunde.arrayAusgeliehenerRaeder)
		{
			System.out.println("- " + out.getAuftragsnummer() + ":\t" + out.getBezeichnung());
		}
		
		System.out.println("Kunde " + zweiKunde.getName() + " mit der Kundennummer " + vertragZwei.getKundennummer() + " hat folgende Raeder ausgeliehen:");
		for (Mietvertrag out: zweiKunde.arrayAusgeliehenerRaeder)
		{
			System.out.println("- " + out.getAuftragsnummer() + ":\t" + out.getBezeichnung());
		}
		
		System.out.println("Kunde " + dreiKunde.getName() + " mit der Kundennummer " + vertragVier.getKundennummer() + " hat folgende Raeder ausgeliehen:");
		for (Mietvertrag out: dreiKunde.arrayAusgeliehenerRaeder)
		{
			System.out.println("- " + out.getAuftragsnummer() + ":\t" + out.getBezeichnung());
		}
	}
}
