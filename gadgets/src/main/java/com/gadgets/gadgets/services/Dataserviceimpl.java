package com.gadgets.gadgets.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gadgets.gadgets.dao.Datadao;
import com.gadgets.gadgets.entity.Detail;
import com.gadgets.gadgets.entity.Detailinfo;
@Service
public class Dataserviceimpl implements Dataservice {

	
	@Autowired
	private Datadao datadao;
	
	
	Detailinfo datainfo=new Detailinfo();
	
	@SuppressWarnings("deprecation")
	@Override
	public Detailinfo getData(Detail data) {
		
		datainfo.setDiscription(datadao.getById(data.type).getDiscription());
		datainfo.setType(datadao.getById(data.type).getType());
		datainfo.setImg(datadao.getById(data.type).getImg());
		
		return datainfo ;
		
		
		//return datadao.getById(data.type);
	}

}
