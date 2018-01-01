
public class Kunde 
{
	private int kundennummer;
	private String name;
	private int anzahlAusgeliehenerRaeder;
	protected Mietvertrag[] arrayAusgeliehenerRaeder; 
	
	Kunde(int kundennummer, String name, int anzahlAusgeliehenerRaeder)
	{
		this.kundennummer = kundennummer;
		this.name = name;
		this.anzahlAusgeliehenerRaeder = anzahlAusgeliehenerRaeder;
		this.arrayAusgeliehenerRaeder =  new Mietvertrag[anzahlAusgeliehenerRaeder];
	}
	
	public int getKundennummer()
	{
		return kundennummer;
	}
	public void setKundennummer(int kundennummer)
	{
		this.kundennummer = kundennummer;
	}
	public String getName()
	{
		return name;
	}
	public void setName(String name)
	{
		this.name = name;
	}
	public int getAnzahlAusgeliehenerRaeder()
	{
		return anzahlAusgeliehenerRaeder;
	}
	public void setAnzahlAusgeliehenerRaeder(int anzahlAusgeliehenerRaeder) 
	{
		this.anzahlAusgeliehenerRaeder = anzahlAusgeliehenerRaeder;
	}
	public Mietvertrag[] getArrayAusgeliehenerRaeder()
	{
		return arrayAusgeliehenerRaeder;
	}
	public void setArrayAusgeliehenerRaeder(Mietvertrag[] arrayAusgeliehenerRaeder) 
	{
		this.arrayAusgeliehenerRaeder = arrayAusgeliehenerRaeder;
	}
	
	
}
