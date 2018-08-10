package com.example.CS4550_FinalProject.repository;
import com.example.CS4550_FinalProject.DateModel.Post;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import java.util.List;
public interface PostRepository extends CrudRepository<Post, Integer>{
}
