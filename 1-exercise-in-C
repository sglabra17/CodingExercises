/**
 * Author of the Solution: Samuel García Labra
 * Date: Thursday, August 29, 2024
 * Time: 20h 44mm - Mexico City
 * 
 * ----Problem to Solve (Extracted from the Web)-----
 * The Supply Chain Manager at a Companie's Warehouse
 * is shipping the last container of the day.
 * All n boxes have been loaded into the truck with
 * their sizes represented in the array boxes.
 * The truck may not have enough capacity to store all
 * the boxes though, so some of the boxes may have to
 * be unloaded. The reamaining boxes must satisfy the 
 * condition:  max(boxes) <= capacity * min(boxes)
 * 
 * Given the array, boxes, and capacity, find the
 * minimum number of boxes that need to be unloaded.
 * 
 * Example.
 * Given n=4, 
 * box sizes of [1,4,3,2] and 
 * capacity=2
 * */ 
#include <stdio.h>

// Get Maximum Box Size Value
int max(int start,int arr[4],int len){
    int max = 0;
    for(int i = start; i < len; i++){
        if(arr[i]>max) max = arr[i];
    }
    printf("\n\nMax: %d",max);
    return max;
}


// Get Minimum Box Size Value
int min(int start, int arr[4],int len){
    int min = arr[start];
    for(int i = start; i < len; i++){
        if(arr[i]<min) min = arr[i];
    }
    printf("\nMin: %d",min);
    return min;
}


int boxes_unloaded (){
    // Input Data
    int num_boxes          = 4;
    int box_sizes[4]       = { 1, 4, 3, 2 };
    int capacity           = 2;
    // Variables
    int min_boxes_unloaded = 0;
    int flag               = 1;
    
    // Loop for Every Box Unloaded
    int start = 0;
    while(flag){
        int max_num = max(start,box_sizes,num_boxes);
        int min_num = min(start,box_sizes,num_boxes);
        
        // Evaluate Condition for Remaining Boxes
        if(max_num <= capacity * min_num) break;
        min_boxes_unloaded++;
        start++;
    }
    
    return min_boxes_unloaded;
}


int main() {
    printf("\n\nThe Minimum Number of Boxes that need to be unloaded is: %d",boxes_unloaded());
    
    return 0;
}
