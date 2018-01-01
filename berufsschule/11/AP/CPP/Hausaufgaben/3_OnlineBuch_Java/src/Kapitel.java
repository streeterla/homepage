
public class Kapitel 
{
	private int anzahlSeiten;
	private String name;
	
	Kapitel(int anzahlSeiten, String name)
	{
		this.anzahlSeiten = anzahlSeiten;
		this.name = name;
	}
	
	public int getAnzahlSeiten()
	{
		return anzahlSeiten;
	}
	public void setAnzahlSeiten(int anzahlSeiten)
	{
		this.anzahlSeiten = anzahlSeiten;
	}
	public String getName() 
	{
		return name;
	}
	public void setName(String name)
	{
		this.name = name;
	}
	public String toString()
	{
		String output =  name + " mit " + anzahlSeiten + " Seiten";
		return output;
	}
	
}
