
public class Mountainbike extends Fahrrad
{
	private double laengeFeder;

	Mountainbike(String bezeichnung, int laengeFeder)
	{
		super(bezeichnung);
		this.laengeFeder = laengeFeder;
	}

	public double getLaengeFeder() 
	{
		return laengeFeder;
	}

	public void setLaengeFeder(double laengeFeder) 
	{
		this.laengeFeder = laengeFeder;
	}
	
	
}
