import React, { useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import Order from './assets/images/order.png'
import Pagination from './Pagination';
const Table = ({
    tableData,
    column
}) => {

    const table = useReactTable({
        data: tableData,
        columns: column,

        state: {

        },

        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),

        // manualPagination: true,

        getPaginationRowModel: getPaginationRowModel(),
        autoResetPageIndex: false,
        enableRowSelection: true,

    });
    console.log(table.getAllFlatColumns())
    return (
        <>
            <table className='overflow-hidden' >
                <thead className='sticky top-0 z-2'>
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">

                        {table?.getHeaderGroups()?.map((headerGroup) => (
                            <>
                                {headerGroup?.headers?.map((header) => {
                                    const { enableSorting = true } = header.column.columnDef; // Default to true if not set

                                    return (
                                        <th
                                            width={header.getSize()}
                                            key={header.id}
                                            {...(enableSorting && { onClick: header.column.getToggleSortingHandler() })}
                                        >
                                            <span className='flex p-4 items-center font-semibold border-b-2 border-gray-100 text-sm' >{header.column.columnDef.header &&
                                                typeof header.column.columnDef.header === "string"
                                                ? header.column.columnDef.header
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        {enableSorting &&    <img className='size-3 ms-2' src={Order} alt="" />}
                                        </span>
                                            {/* {enableSorting && header.column.getIsSorted() &&
                          (header.column.getIsSorted() === "desc" ? (
                            <img className='size-4' src={Order} alt="" />
                          ) : (
                            <img className='size-4' src={Order} alt="" />
                          ))} */}
                                        </th>
                                    );
                                })}
                            </>
                        ))}

                    </tr>
                </thead>
                <tbody className="text-gray-600 fw-bold">

                    {tableData?.length > 0 && table.getRowModel().rows?.length > 0 ? (
                        table.getRowModel().rows.map((row, index) => {
                            return (
                                <>
                                    <tr className="text-xs h-3 border-b-2 border-gray-100" key={row.id}>
                                        {row.getVisibleCells().map((cell) => (
                                            <td className='p-4' width={cell.column.getSize()} key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>

                                </>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={11}>
                                <div className="d-flex text-center w-100 align-content-center justify-content-center">
                                    No records
                                </div>
                            </td>
                        </tr>
                    )}


                </tbody>
            </table>
            <Pagination table={table} />
        </>
    )
}

export default Table
