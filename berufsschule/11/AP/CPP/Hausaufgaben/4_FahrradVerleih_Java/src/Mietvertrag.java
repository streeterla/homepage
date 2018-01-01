
public class Mietvertrag 
{
	private int auftragsnummer;
	private String bezeichnung;
	private int kundennummer;
	
	Mietvertrag(int auftragsnummer, String bezeichnung, int kundennummer)
	{
		this.auftragsnummer = auftragsnummer;
		this.bezeichnung = bezeichnung;
		this.kundennummer = kundennummer;
	}
	
	public int getAuftragsnummer()
	{
		return auftragsnummer;
	}
	public void setAuftragsnummer(int auftragsnummer) 
	{
		this.auftragsnummer = auftragsnummer;
	}
	public String getBezeichnung() 
	{
		return bezeichnung;
	}
	public void setBezeichnung(String bezeichnung) 
	{
		this.bezeichnung = bezeichnung;
	}
	public int getKundennummer()
	{
		return kundennummer;
	}
	public void setKundennummer(int kundennummer) 
	{
		this.kundennummer = kundennummer;
	}
	
	
}
