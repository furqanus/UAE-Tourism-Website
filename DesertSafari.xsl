<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
 <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
 <xsl:template match="/desertSafari">
   <html>
     <style>
       div.page2{
       font-size:20px;

       background-image: url("https://img.locationscout.net/images/2019-09/sunset-at-la-mer-beach-united-arab-emirates_l.jpeg");
       padding:10px;
       color:white;
       }

       div.entertainment h3{
       color:red;
       font-family:verdana;
       }

       div.transportpackage h3{
       color:red;
       font-family:verdana;
       }

       div.transportpackage td{
       width:30%;
       text-align:center;

       }

       div.activities table{
       padding:5px;
       width:40%;


       }
       div.activities h3{
       color:red;
       font-family:verdana;

       }

       div.dinner h3{
       color:red;
       font-family:verdana;

       }

       div.collage{
       margin:auto;
       margin-left:30%;
       }




     </style>

   <body>

     <img id="back1" src="https://travelnice.net/wp-content/uploads/2018/10/1.jpg" height="100%" width="100%" />
     <div class="page2">

     <h1 style="font-family:Script MT Bold;font-size:55px;text-align:center;">Desert safari -special offer</h1>
    <div class="transportpackage">
     <h3>Transport Packages</h3>
     <table width="100%">
       <tr>
         <th>SELF DRIVE PACKAGE</th>
         <th>BASIC PACKAGE</th>
         <th>ADVANCED PACKAGE</th>
       </tr>
       <xsl:for-each select="transport">

       <tr>
         <td><xsl:for-each select="self">
           <img src="https://specials-images.forbesimg.com/imageserve/959648268/960x0.jpg?fit=scale" height="300px" width="400px" /><br />
           Cost:<xsl:value-of select="cost" /><br />
         <xsl:value-of select="description" /></xsl:for-each>
         </td>

         <td>
           <xsl:for-each select="basic">
             <img src="https://img.grouponcdn.com/deal/sPs1vZTo7L3xZYwQ9Yq7/j6-700x420/v1/c700x420.jpg" height="300px" width="400px" /><br />
             Cost:<xsl:value-of select="cost" /><br />
           <xsl:value-of select="description" /></xsl:for-each>

         </td>

         <td>
           <xsl:for-each select="advanced">
             <img src="https://media-cdn.tripadvisor.com/media/photo-s/14/47/c1/64/suv-chauffeur-driven.jpg" height="300px" width="400px" /><br />
             Cost:<xsl:value-of select="cost" /><br />
           <xsl:value-of select="description" /></xsl:for-each>

         </td>
       </tr>

</xsl:for-each>

     </table>
</div>

     <h2 style="font-family:Hobo Std;text-align:center;color:yellow;"> Each Package includes the following:</h2>

     <div class="entertainment">
       <div style="float:left;width:60%;">



     <h3>Entertainment Shows</h3>
     <ul>
     <xsl:for-each select="shows">
       <li><xsl:value-of select="name" /></li>

     </xsl:for-each>
   </ul>
 </div>
 <div style="float:left;">
   <img src="https://www.visitdubai.com/-/media/images/imported/tertiary%20category/falconry/v2/480x360-mobile-banner-falconry.jpg" height="200px" width="200px" />
   <img src="https://i.pinimg.com/originals/96/c5/77/96c5774aff703e75f4eb7ada6ed89e63.jpg" height="200px" width="200px" />
 </div>




</div>
<div style="clear:both" />

<div class="activities">
  <div style="float:left;width:60%">

<h3>Fun Activities for Children</h3>
   <table border="1">
     <tr>
       <th>Activities</th>
       <th>Age Limit</th>
     </tr>
     <xsl:for-each select="activities">
       <tr>
       <td><xsl:value-of select="name" /></td>
       <td><xsl:value-of select="agegrp" /></td>
     </tr>
     </xsl:for-each>
   </table>

 </div>
 <div style="float:left;">
   <img src="https://dubaisafariplus.com/wp-content/uploads/2018/03/0000156_desert-safari-with-quad-biking.jpeg" height="200px" width="200px" />
   <img src="https://www.cheapdesertsafaridubai.com/wp-content/uploads/2018/08/camel-ride-safari.jpg" height="200px" width="200px" />

 </div>

 </div>

<div style="clear:both" />
 <div class="dinner">
   <div style="float:left;width:60%;">

   <h3>Dinner Cuisines</h3>
   <ol>
     <xsl:for-each select="dinner">
       <xsl:for-each select="cuisine">
       <li><xsl:value-of select="name" /></li>
        </xsl:for-each>
   </xsl:for-each>
</ol>
</div>
<div style="float:left">
  <img src="https://www.platinum-heritage.com/wp-content/uploads/2019/10/Desert-Safari-Dubai-Dinner-3.jpg" height="200px" width="200px" />
  <img src="https://www.dubaiadventure.net/wp-content/uploads/2016/05/Desert-safari-dinner.jpg" height="200px" width="200px" />
</div>
</div>
<div style="clear:both;" />

   </div>
   </body>
 </html>
</xsl:template>
</xsl:stylesheet>
