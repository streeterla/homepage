
public class Werbekunde extends Kunde
{
	private String product;

	Werbekunde()
	{
		super();
	}
	public Werbekunde(String name, String vorname, int kundennummer, String product)
	{
		super(name, vorname, kundennummer);
		this.product = product;
	}
	public String getProduct() 
	{
		return product;
	}

	public void setProduct(String product)
	{
		this.product = product;
	}
}
