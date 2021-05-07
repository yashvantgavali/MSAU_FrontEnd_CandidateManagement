import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbyname'
})
export class FilterbynamePipe implements PipeTransform {

  
  transform(value: any, searchTerm : String): any {
    if(value.length===0)
    {
      return value;
    }
    return value.filter(function(search:any)
    {
       return search.firstname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1
       

    
    })
    
  }

}
