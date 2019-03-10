# presentation-models

Augmented.js Presentation Models & Collections Module

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Model](#model)
    -   [Parameters](#parameters)
    -   [url](#url)
        -   [Properties](#properties)
    -   [url](#url-1)
        -   [Properties](#properties-1)
    -   [sync](#sync)
        -   [Parameters](#parameters-1)
        -   [Properties](#properties-2)
    -   [sync](#sync-1)
        -   [Parameters](#parameters-2)
        -   [Properties](#properties-3)
    -   [fetch](#fetch)
        -   [Parameters](#parameters-3)
    -   [save](#save)
        -   [Parameters](#parameters-4)
    -   [update](#update)
        -   [Parameters](#parameters-5)
    -   [destroy](#destroy)
        -   [Parameters](#parameters-6)
-   [sync](#sync-2)
-   [Collection](#collection)
    -   [Parameters](#parameters-7)
    -   [url](#url-2)
        -   [Properties](#properties-4)
    -   [url](#url-3)
        -   [Properties](#properties-5)
    -   [sync](#sync-3)
        -   [Parameters](#parameters-8)
    -   [fetch](#fetch-1)
        -   [Parameters](#parameters-9)
    -   [save](#save-1)
        -   [Parameters](#parameters-10)
    -   [update](#update-1)
        -   [Parameters](#parameters-11)
    -   [destroy](#destroy-1)
        -   [Parameters](#parameters-12)
-   [LocalStorageCollection](#localstoragecollection)
    -   [Parameters](#parameters-13)
    -   [key](#key)
        -   [Properties](#properties-6)
    -   [persist](#persist)
        -   [Properties](#properties-7)
    -   [namespace](#namespace)
        -   [Properties](#properties-8)
    -   [initialize](#initialize)
        -   [Parameters](#parameters-14)
    -   [init](#init)
        -   [Parameters](#parameters-15)
    -   [fetch](#fetch-2)
        -   [Parameters](#parameters-16)
    -   [save](#save-2)
        -   [Parameters](#parameters-17)
    -   [update](#update-2)
        -   [Parameters](#parameters-18)
    -   [destroy](#destroy-2)
        -   [Parameters](#parameters-19)
    -   [sync](#sync-4)
        -   [Parameters](#parameters-20)
-   [PaginatedCollection](#paginatedcollection)
    -   [Parameters](#parameters-21)
    -   [setPageSize](#setpagesize)
        -   [Parameters](#parameters-22)
    -   [setPageSize](#setpagesize-1)
        -   [Parameters](#parameters-23)
    -   [setPageSize](#setpagesize-2)
        -   [Parameters](#parameters-24)
    -   [setCurrentPage](#setcurrentpage)
        -   [Parameters](#parameters-25)
    -   [fetch](#fetch-3)
        -   [Parameters](#parameters-26)
    -   [nextPage](#nextpage)
    -   [previousPage](#previouspage)
    -   [goToPage](#gotopage)
        -   [Parameters](#parameters-27)
    -   [firstPage](#firstpage)
    -   [lastPage](#lastpage)
    -   [refresh](#refresh)
-   [PaginationFactory](#paginationfactory)
-   [PAGINATION_API_TYPE](#pagination_api_type)
    -   [Properties](#properties-9)
-   [getPaginatedCollection](#getpaginatedcollection)
    -   [Parameters](#parameters-28)

## Model

**Extends Augmented.AbstractModel**

Model <br/>
Supports: <ul>

<li>REST</li>
<li>Validation and Schemas</li>
<li>Security</li>
</ul>

### Parameters

-   `attributes`  
-   `options`  
-   `args` **...any** 

### url

#### Properties

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The url for the datasource (if applicable)

**Meta**

-   **deprecated**: This is deprecated.


### url

#### Properties

-   `uri` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The uri for the datasource (if applicable)

### sync

mock property

#### Parameters

-   `method`  
-   `model`  
-   `options`  

#### Properties

-   `mock` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Sets mock mode in the model

### sync

Cross Origin property

#### Parameters

-   `method`  
-   `model`  
-   `options`  

#### Properties

-   `crossOrigin` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Cross Origin property

### fetch

Fetch the model

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### save

Save the model

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### update

Update the model

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### destroy

Destroy the model

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

## sync

sync - Sync model data to bound REST call

## Collection

**Extends Augmented.AbstractCollection**

Collection Class

### Parameters

-   `models`  
-   `options`  

### url

#### Properties

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The url for the datasource (if applicable)

**Meta**

-   **deprecated**: This is deprecated.


### url

#### Properties

-   `uri` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The uri for the datasource (if applicable)

### sync

Sync collection data to bound REST call

#### Parameters

-   `method` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The method to Unsuccessfull
-   `model` **[Model](#model)** The model to Sync
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The options to pass

Returns **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Returns a request function

### fetch

Fetch the collection

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### save

Save the collection

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### update

Update the collection

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### destroy

Destroy the collection

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

## LocalStorageCollection

**Extends Augmented.AbstractCollection**

A local storage-based Collection

### Parameters

-   `models`  
-   `options`  

### key

Base key name for the collection (simular to url for rest-based)

#### Properties

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The key

### persist

is Persistant or not

#### Properties

-   `persist` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Persistant property

### namespace

The namespace

#### Properties

-   `namespace` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### initialize

Initialize the model with needed wireing

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### init

Custom init method for the model (called at inititlize)

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### fetch

Fetch the collection

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### save

Save the collection

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### update

Update the collection

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### destroy

Destroy the collection

#### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### sync

Sync method for Collection

#### Parameters

-   `method`  
-   `model`  
-   `options`  

## PaginatedCollection

**Extends Collection**

Paginated Collection Class - A Collection that handles pagination from client or server-side

### Parameters

-   `models`  
-   `options`  

### setPageSize

Current page for the collection

#### Parameters

-   `size`  

### setPageSize

Total pages for the collection

#### Parameters

-   `size`  

### setPageSize

Sets the number of items in a page

#### Parameters

-   `size` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of items in each page

### setCurrentPage

Sets the current page

#### Parameters

-   `page` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Current page in collection

### fetch

Collection.fetch - rewritten fetch method from Backbone.Collection.fetch

#### Parameters

-   `options`  

### nextPage

Moves to the next page

### previousPage

Moves to the previous page

### goToPage

Goes to page

#### Parameters

-   `page` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Page to go to

### firstPage

Moves to the first page

### lastPage

Moves to the last page

### refresh

Refreshes the collection

## PaginationFactory

Pagination factory for returning pagination collections of an API type

## PAGINATION_API_TYPE

Types of pagination API

### Properties

-   `GITHUB` **[Symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol)** GitHub API
-   `SOLR` **[Symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol)** SOLR API
-   `DATABASE` **[Symbol](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol)** Database-like API

## getPaginatedCollection

Get a pagination collection of type

### Parameters

-   `apiType` **Pagination.PAGINATION_API_TYPE** The API type to return an instance of
-   `data` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Collection models
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Collection options