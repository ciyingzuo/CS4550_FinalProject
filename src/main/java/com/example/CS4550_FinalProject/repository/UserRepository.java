package com.example.CS4550_FinalProject.repository;
import com.example.CS4550_FinalProject.DateModel.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import java.util.List;
public interface UserRepository extends CrudRepository<User, Integer>{
}
