import Action from './assets/images/Icon.png'
const column = [
    {
        accessorKey:'model_name',
        header:'Model Name',
        
        cell: (props) => <>
       
        <p >{props.getValue()}</p><p>ID: {props.table.getRow(props.row.index).original.id}</p></>
    
      },
    {
        accessorKey:'model_type',
        header:'Model Type',
        
        cell: (props) => <p>{props.getValue()}</p>
    
      },
    {
        accessorKey:'description',
        header:'description',
        size:300,
        cell: (props) => <p className="w-32 whitespace-nowrap text-ellipsis overflow-hidden ">{props.getValue()}</p>
    
      },
    {
        accessorKey:'created_on',
        header:'Created On',
        
        cell: (props) => <p>{props.getValue()}</p>
    
      },
    {
        accessorKey:'last_trained_on',
        header:'Last Trained on',
        size:200,
        cell: (props) => <p>{props.getValue()}</p>
    
      },
    {
        accessorKey:'status',
        header:'Status',
        
        cell: (props) => <p className={`
          ${props.getValue() === "Completed" ? "text-green-500 bg-green-200" 
            : props.getValue() === "Failed" ? "bg-red-400 text-red-700"  
            : props.getValue() === "Pending" ? "bg-orange-200 text-orange-600" 
            : "bg-indigo-300 text-indigo-500"  } 
            p-1  text-xs text-center rounded-sm`}>{props.getValue()}</p>
    
      },
    {
        accessorKey:'',
        header:'Action',
        enableSorting:false,
        cell: (props) => <p className='flex justify-center items-center'><img className='h-3' src={Action} /></p>
    
      }
]
export {column}