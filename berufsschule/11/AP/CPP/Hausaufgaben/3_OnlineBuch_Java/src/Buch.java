import java.util.*;
public class Buch 
{
	private String titel;
	private Date erscheinungsjahr;
	
	public String getTitel() 
	{
		return titel;
	}
	public void setTitel(String titel) 
	{
		this.titel = titel;
	} 
	public String getErscheinungsjahr() 
	{
		return erscheinungsjahr.getDay() + "." + erscheinungsjahr.getMonth() + "." + erscheinungsjahr.getYear();
	}
	public void setErscheinungsjahr(Date erscheinungsjahr) 
	{
		this.erscheinungsjahr = erscheinungsjahr;
	}
	public void Navigation()
	{
		Inhaltsverzeichnis.Navigation();
	}
}
