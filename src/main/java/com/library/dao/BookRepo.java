package com.library.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.model.bookExcel;



public interface BookRepo extends JpaRepository<bookExcel, Integer>  {

}
