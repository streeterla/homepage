public class Kunde 
{
	private String name;
	private String vorname;
	private int kundennummer;
	private int anzahlKunden = 0;
	
	public Kunde()
	{
		anzahlKunden++;
	}
	Kunde(String name, String vorname, int kundennummer)
	{
		anzahlKunden++;
		this.name = name;
		this.vorname = vorname;
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
	public String getVorname()
	{
		return vorname;
	}
	public void setVorname(String vorname) 
	{
		this.vorname = vorname;
	}
	public int getKundennummer() 
	{
		return kundennummer;
	}
	public void setKundennummer(int kundennummer) 
	{
		this.kundennummer = kundennummer;
	}
	public int getAnzahlKunden()
	{
		return anzahlKunden;
	}
}
