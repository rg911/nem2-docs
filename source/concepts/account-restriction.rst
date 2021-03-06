###################
Account Restriction
###################

:doc:`Accounts <account>` may configure a set of smart rules to block announcing or receiving transactions given a series of restrictions.

The account owners—plural in case of multisig accounts—can edit the account restrictions at a later time announcing the specific :ref:`AccountRestrictionTransaction <account-address-restriction-transaction>`.

.. csv-table:: Restriction types
    :widths: 40 30 30
    :header: "Restriction", "Incoming Transactions", "Outgoing Transactions"
    :delim: ;

    AccountAddressRestriction; ✔️; ✔️
    AccountMosaicRestriction;✔️ ;  ❌
    AccountOperationRestriction;❌; ✔️

*******************
Address restriction
*******************

An account can decide to **only receive** transactions from a list of allowed **addresses**. Alternatively, the account can define a list of blocked addresses.

Restricting **incoming transactions** is useful when the account will be only receiving transactions from known addresses, or when the account wants to block transactions coming from unknown senders.

.. figure:: ../resources/images/diagrams/account-restrictions-address.png
    :align: center
    :width: 450px

    Address restriction diagram

.. note:: Allow and block restrictions are mutually exclusive. In other words, an account can only configure a block or an allow list per type of restriction.

By default, when there are no restrictions set, all the accounts in the network can announce transactions to the unrestricted account.

Additionally, an account can decide to apply address restrictions to the **outgoing transactions**, limiting the accounts allowed that are valid recipients.

******************
Mosaic restriction
******************

Similar to address restrictions, an account can configure a restriction to permit **incoming** transactions only if all the :doc:`mosaics <mosaic>` attached are allowed. On the other hand, the account can refuse to accept transactions containing a mosaic listed as blocked.

Account mosaic restrictions are generally used to **prevent accounts being tagged with mosaics** not associated to their activity.

*********************
Operation restriction
*********************

An account can allow/block announcing **outgoing** transactions with a :ref:`determined operation type <transaction-types>`. By doing so, the account increases its security, preventing the announcement by mistake of undesired transactions.

********
Examples
********

Blocking spam transactions
==========================

A pharmaceutical company is using the public chain to certify the quality of their products.

When the quality verification process concludes, an operator sends a :doc:`quality seal<mosaic>` to the product account.

The final customers can review the product mosaics scanning a QR code. For that reason, the company only wants to show related transactions, avoiding that others spam their products with non-related information.

.. figure:: ../resources/images/examples/account-restrictions-spam.png
    :align: center
    :width: 450px

    Blocking spam transactions

The company opts to configure their product accounts restrictions, enabling only to receive transactions containing ``pharmaceutical.quality.seal`` mosaics.

Enhancing the account security
==============================

Lately, Alice is only using her main account to cosign aggregate transactions where she is a cosignatory for the :doc:`multisig <multisig-account>` account.

As a temporary security measure, Alice opts to disable announcing transfer transactions from her main account. Doing so, Alice double-checks that the funds held in the main account are not going to be transferred by mistake.

******
Guides
******

.. postlist::
    :category: Account Restriction
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. note:: Configuration parameters are :properties:`editable <config-network.properties>`. Public network configuration may differ.

.. _account-address-restriction-transaction:

AccountAddressRestrictionTransaction
====================================

Configure restrictions to prevent receiving or sending transactions from/to undesired addresses.

**Version**: 0x01

**EntityType**: 0x4150

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    restrictionType; :ref:`AccountRestrictionFlags <account-restriction-flags>` ; Type of the account restriction.
    restrictionAdditionsCount; uint8; number of account restriction additions.
    restrictionDeletionsCount; uint8; Number of account restriction deletions.
    accountRestrictionTransactionBody_Reserved1 ; uint32; Reserved padding to align restrictionAdditions on 8-byte boundary.
    restrictionAdditions; array(:schema:`UnresolvedAddress <types.cats#L10>`, restrictionAdditionsCount); Account restriction additions.
    restrictionDeletions; array(:schema:`UnresolvedAddress <types.cats#L10>`, restrictionDeletionsCount); Account restriction deletions.

.. _account-mosaic-restriction-transaction:

AccountMosaicRestrictionTransaction
===================================

Configure restrictions to prevent receiving transactions containing a specific mosaic.

**Version**: 0x01

**EntityType**: 0x4250

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    restrictionType; :ref:`AccountRestrictionFlags <account-restriction-flags>` ; Type of the account restriction.
    restrictionAdditionsCount; uint8; number of account restriction additions.
    restrictionDeletionsCount; uint8; Number of account restriction deletions.
    accountRestrictionTransactionBody_Reserved1 ; uint32; Reserved padding to align restrictionAdditions on 8-byte boundary.
    restrictionAdditions; array(:schema:`UnresolvedMosaicId <types.cats#L6>`, restrictionAdditionsCount); Account restriction additions.
    restrictionDeletions; array(:schema:`UnresolvedMosaicId <types.cats#L6>`, restrictionDeletionsCount); Account restriction deletions.

.. _account-operation-restriction-transaction:

AccountOperationRestrictionTransaction
======================================

Configure restrictions to prevent announcing transactions by :ref:`type <transaction-types>`.

**Version**: 0x01

**EntityType**: 0x4350

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    restrictionType; :ref:`AccountRestrictionFlags <account-restriction-flags>` ; Type of the account restriction.
    restrictionAdditionsCount; uint8; number of account restriction additions.
    restrictionDeletionsCount; uint8; Number of account restriction deletions.
    accountRestrictionTransactionBody_Reserved1 ; uint32; Reserved padding to align restrictionAdditions on 8-byte boundary.
    restrictionAdditions; array(:ref:`EntityType <entity-type>`, restrictionAdditionsCount); Account restriction additions.
    restrictionDeletions; array(:ref:`EntityType <entity-type>`, restrictionDeletionsCount); Account restriction deletions.

.. _account-restriction-flags:

AccountRestrictionFlags
=======================

Enumeration: uint16

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x0001; Restriction type is an address.
    0x0002; Restriction type is a mosaic identifier.
    0x0004; Restriction type is a transaction type.
    0x4000; Restriction is interpreted as outgoing.
    0x8000; Restriction is interpreted as blocking operation.
