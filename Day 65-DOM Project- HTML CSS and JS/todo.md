# HTML
```
<div class="todoList">
            <button class="close">Close</button>
            <div class="up">
                <h2>Todo List</h2>
                <div class="task">
                    <input type="text" placeholder="Add your new todo">
                    <i class="ri-add-box-fill"></i>
                </div>

                <div class="strip"><p>Buy a new gaming laptop</p>
                <span><i class="ri-delete-bin-7-fill"></i></span></div>
            </div>
            <div class="down">
                <p>You have 2 pending tasks</p>
                <button>Clear All</button>
            </div>
            ```
---
# CSS

```

  .todoList{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    position: absolute;
    z-index: 10;
    top: 0;

    .up{
      .task{
        margin-top: 15px;
        @include flex();
        justify-content: flex-start;

        
        input{
          border: 1px solid var(--sec);
          background-color: var(--pri);
          padding: 7px 7px;
          width: 50%;
          font-size: 16px;
          outline: none;
        }
        i{
          color: var(--sec);
          font-size: 35px;
        }
      }
      .strip{
        margin-top: 10px;
        height: 40px;
        border-radius: 5px;
        background-color: var(--sec);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline:10px ;
        p{
          columns: var(--pri);
          font-size: 18px;
        }
        i{
          font-size:18px;
        }
      }

    }
    .down{
      display: flex;
      padding-inline: 10px;
      justify-content: space-between;
      align-items: center;
      // margin-bottom: 10px;
      p{
        font-size: 18px;
        color: var(--sec);
      }      
      button{
        color: var(--pri);
        border: none;
        background-color:var(--sec) ;
        padding: 10px 16px;
        border-radius: 5px;
      }
    }

}
```
        