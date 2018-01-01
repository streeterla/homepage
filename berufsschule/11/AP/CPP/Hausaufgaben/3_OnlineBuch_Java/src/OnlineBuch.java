
public class OnlineBuch extends Buch
{
	private int anzahlAutoren;
	private String autoren[] = new String[anzahlAutoren];
	private int anzahlKapitel;
	private Kapitel kapitel[] = new Kapitel[anzahlKapitel];
	
	
	public int getAnzahlAutoren() 
	{
		return anzahlAutoren;
	}
	public void setAnzahlAutoren(int anzahlAutoren)
	{
		this.anzahlAutoren = anzahlAutoren;
	}
	public String[] getAutoren()
	{
		return autoren;
	}
	public void setAutoren(String[] autoren)
	{
		this.autoren = autoren;
	}
	public int getAnzahlKapitel() 
	{
		return anzahlKapitel;
	}
	public void setAnzahlKapitel(int anzahlKapitel)
	{
		this.anzahlKapitel = anzahlKapitel;
	}
	public Kapitel[] getKapitel() 
	{
		return kapitel;
	}
	public void setKapitel(Kapitel[] kapitel) 
	{
		this.kapitel = kapitel;
	}	
}
