
public class Trekkingrad extends Fahrrad
{
	private boolean STVOtauglich;

	Trekkingrad(String bezeichnung, boolean STVOtauglich) 
	{
		super(bezeichnung);
		this.STVOtauglich = STVOtauglich;
	}
	
	public boolean isSTVOtauglich() 
	{
		return STVOtauglich;
	}

	public void setSTVOtauglich(boolean sTVOtauglich) 
	{
		STVOtauglich = sTVOtauglich;
	}
	
	
}
