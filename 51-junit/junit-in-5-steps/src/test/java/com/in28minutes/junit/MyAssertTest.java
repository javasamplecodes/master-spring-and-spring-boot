package com.in28minutes.junit;

//import static org.junit.Assert.assertArrayEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MyAssertTest {

	List<String> todos = Arrays.asList("AWS", "Azure", "DevOps");
	
	@Test
	void testAsserts() {
		boolean test = todos.contains("AWS");//Result
		boolean test2 = todos.contains("GCP");//Result
		
		//assertEquals(true, test);
		assertTrue(test);
		assertFalse(test2);
		//assertNull,assertNotNull
		assertArrayEquals(new int[] {1,2}, new int[] {1, 2});
		
		assertEquals(3, todos.size());		
	}

}
