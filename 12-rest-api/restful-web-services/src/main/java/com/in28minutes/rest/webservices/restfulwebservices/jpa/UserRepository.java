package com.in28minutes.rest.webservices.restfulwebservices.jpa;

import com.in28minutes.rest.webservices.restfulwebservices.user.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

//    @Entity(name = "user_details")
//    @NamedEntityGraph(
//            name = "User.posts",
//            attributeNodes = @NamedAttributeNode("posts")
//    )
//    public class User {
//    ...
// MY NOTE:
// @NamedEntityGraph at User Class and @EntityGraph annotation below will result in
// one SQL query rather than four seperated SQL queries
// while accessing http://localhost:8080/jpa/users
//    BEFORE
//    Hibernate: select u1_0.id,u1_0.birth_date,u1_0.name from user_details u1_0
//    Hibernate: select p1_0.user_id,p1_0.id,p1_0.description from post p1_0 where p1_0.user_id=?
//    Hibernate: select p1_0.user_id,p1_0.id,p1_0.description from post p1_0 where p1_0.user_id=?
//    Hibernate: select p1_0.user_id,p1_0.id,p1_0.description from post p1_0 where p1_0.user_id=?
//    AFTER
//    Hibernate: select u1_0.id,u1_0.birth_date,u1_0.name,p1_0.user_id,p1_0.id,p1_0.description from user_details u1_0 left join post p1_0 on u1_0.id=p1_0.user_id
    @EntityGraph("User.posts")
    List<User> findAll();

}
