
public class Fahrzeugkunde extends Kunde
{
	private int fahrzeugnummer;

	
	public Fahrzeugkunde()
	{
		super();
	}
	public Fahrzeugkunde(String name, String vorname, int kundennummer, int fahrzeugnummer)
	{
		super(name, vorname, kundennummer);
		this.fahrzeugnummer = fahrzeugnummer;
	}
	public int getFahrzeugnummer() 
	{
		return fahrzeugnummer;
	}
	public void setFahrzeugnummer(int fahrzeugnummer)
	{
		this.fahrzeugnummer = fahrzeugnummer;
	}
}
