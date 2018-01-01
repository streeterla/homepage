
public class Fahrrad 
{
	private String bezeichnung;
	
	Fahrrad(String bezeichnung)
	{
		this.bezeichnung = bezeichnung;
	}
	
	public void ausleihen()
	{
		System.out.println("Du hast das Fahrrad '" + bezeichnung + "' ausgeliehen");
	}

	public String getBezeichnung() 
	{
		return bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) 
	{
		this.bezeichnung = bezeichnung;
	}
	
}
