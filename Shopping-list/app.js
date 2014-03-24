$(document).ready(function(){
    
// Visualize the text input
    
    $('#button').click(function(){
        
        var new_task =$('#addtask').val();
        $('#list_items').prepend('<li class="items"><img class="delete" src="images/cross_icon.png" alt="delete"><span>'+new_task+'</span><img class="check" src="images/check_icon.png" alt="check"></li>');
        return false;
    
    });
    
// On click, mark list task as complete or incomplete
    
    $('ul').on('click','span', function(){
        $(this).toggleClass('span');
        $(this).toggleClass('check');
    });
    
// Clicking delete icon makes li disappear
    
    $('ul').on('click','.delete',function(){
        $(this).closest('li').hide();
    });
    
    
});

