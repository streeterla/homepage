
public class Datenfeld 
{
	private int anzahlKunden;
	private Kunde kundenArray[] = new Kunde[anzahlKunden];
	
	Datenfeld(int anzahlKunden, Kunde kundenArray[])
	{
		this.anzahlKunden = anzahlKunden;
		this.kundenArray = kundenArray;
	}
	
	public int getAnzahlKunden() 
	{
		return anzahlKunden;
	}
	public void setAnzahlKunden(int anzahlKunden) 
	{
		this.anzahlKunden = anzahlKunden;
	}
	public Kunde[] getKundenArray()
	{
		return kundenArray;
	}
	public void setKundenArray(Kunde[] kundenArray)
	{
		this.kundenArray = kundenArray;
	}
	
	
}
